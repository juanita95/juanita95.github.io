import {AfterViewInit, Component, OnChanges, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, AfterViewInit, OnChanges {
  
  @Input() url?: string;
  @Input() color: string = '';
  @ViewChild('svgIcons') svgIcons?: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.readFile();
  }

  ngOnChanges(): void {
    this.readFile();
  }

  async readFile(): Promise<void> {
    const result: string = await lastValueFrom(
      this.http.get(this.url ?? 'assets/svg/error.svg', {responseType: 'text'})
    );
    if(this.svgIcons){
      this.svgIcons.nativeElement.innerHTML = this.normalizeSvg(result);
    }
  }

  normalizeSvg(svg: string): string {
    const regColor = /fill=\.*/g;
    return svg.replace(regColor, `fill='${this.color}'`)
  }
}