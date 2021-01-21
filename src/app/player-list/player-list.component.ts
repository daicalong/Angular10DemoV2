import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../services/message.service';
import { PlayerList } from '../constants/nfl-player-list.constant';
import { Player } from '../interfaces/player.interface';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})

export class PlayerListComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  playerList: Player[] = PlayerList;
  sortBy: keyof Player = 'Name';
  sortOrderDesc: boolean = false;

  changeSortBy(input: keyof Player): void {
    this.sortOrderDesc = this.sortBy === input ? !this.sortOrderDesc : false
    this.sortBy = input;
    this.sortPlayers();
    this.reverseSortOrder(this.sortOrderDesc);
  }

  private reverseSortOrder(sortOrderDesc: boolean): void {
    if (sortOrderDesc) this.playerList.reverse();
  }

  private sortPlayers(): Player[] {
    return this.playerList.sort((a, b) => {
      // if (a[this.sortBy] > b[this.sortBy]) return 1;
      // if (a[this.sortBy] < b[this.sortBy]) return -1;
      return 0;
    })
  }

  ngOnInit(): void { }
}
