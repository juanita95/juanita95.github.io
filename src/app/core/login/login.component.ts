import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { statusClassButton } from 'src/app/ui/components/atoms/interfaces/button-class.interface';
import { statusClassText } from 'src/app/ui/components/atoms/interfaces/text-class.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  textTitle: statusClassText = statusClassText.BIG;
  buttonStyle: statusClassButton = statusClassButton.GENERAL;
  textButton: statusClassText = statusClassText.MEDIUM;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectLogIn(): void {
    const client_id = environment.client_id;
    const redirect_uri = environment.redirect_uri;
    const code = 'token';
    location.href =
     `https://accounts.spotify.com/es-ES/authorize?client_id=${client_id}&response_type=${code}&redirect_uri=${redirect_uri}/auth/token`;
 }

}
