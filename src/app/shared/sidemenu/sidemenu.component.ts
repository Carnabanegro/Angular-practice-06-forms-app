import { Component, OnInit } from '@angular/core';

interface Menu{
  text: string,
  route: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  templateMenu : Menu[] = [
    {text: 'Basicos' ,route: './template/basicos' },
    {text: 'Dinamicos' ,route: './template/dinamicos' },
    {text: 'Switches' ,route: './template/switches' },
  ];

  reactiveMenu : Menu[] = [
    {text: 'Basicos' ,route: './reactive/basicos' },
    {text: 'Dinamicos' ,route: './reactive/dinamicos' },
    {text: 'Switches' ,route: './reactive/switches' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
