import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/Global.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor (private readonly spotifyService: SpotifyService ) {}
  ngOnInit(): void {
    this.spotifyService.getAuthCode();
  }

}
