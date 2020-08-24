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

  playerList: Array<Player> = PlayerList;
  selectedProp: string = "";

  compareName (player1: Player, player2: Player)  {
    return player1.Name > player2.Name ? 1 : player1.Name === player2.Name ? 0 : -1;
  }

  orderedPlayerList(): Array<Player> {
    return this.playerList.sort(this.compareName);
  }

  sortBy(prop: string): void {
    this.messageService.add(`Sorting NFL list by: ${this.selectedProp}`)
    this.selectedProp = prop;
  }

  ngOnInit(): void {
    this.selectedProp = 'Name';
  }
}
