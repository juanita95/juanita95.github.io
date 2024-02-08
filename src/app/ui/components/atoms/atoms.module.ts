import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { TextComponent } from './text/text.component';
import { TitleComponent } from './title/title.component';
import { ImageComponent } from './image/image.component';
import { IconComponent } from './icon/icon.component';
import { AudioComponent } from './audio/audio.component';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from 'src/app/app.module';

@NgModule({
  declarations: [    
    ButtonComponent,
    ImageComponent,
    SearchInputComponent,
    TextComponent,
    TitleComponent,
    IconComponent,
    AudioComponent
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
  ], 
  exports:[
    ButtonComponent,
    ImageComponent,
    IconComponent,
    SearchInputComponent,
    TextComponent,
    TitleComponent,
    AudioComponent
  ]
})
export class AtomsModule { }
