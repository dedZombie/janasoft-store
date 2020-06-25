import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    @Output() toggleSidenav = new EventEmitter();
    @Input() elementRef: MatSidenav;

    constructor() {}

    ngOnInit() {}
}