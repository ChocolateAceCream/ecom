import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { IImage } from 'ng-simple-slideshow'
import { MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
    imageUrls: (string | IImage)[] = [
        {url: 'assets/slide.png', caption:"the first slogan", clickAction: () => this.openRoute1() },
        {url: 'assets/slide.png', caption:"take $5 off by applying code BGTWAG", clickAction: () => this.openRoute2()},

    ];
    height: string = '45px';
    arrowSize: string = '15px';
    showArrows: boolean = true;
    autoPlay: boolean = true;
    autoPlayInterval: number = 10000;
    disableSwiping: boolean = false;
    stopAutoPlayOnSlide: boolean = true;
    showCaptions: boolean = true;
    captionColor: string = '#FFF';
    captionBackground: string = 'black';

    promotCode: string = "BGTWAG"

    constructor( private router: Router, private snackBar: MatSnackBar ) {}

    ngOnInit() {
    }

    openRoute1() {
        this.router.navigate(['/signup']);
    }
    openRoute2() {
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.promotCode;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.snackBar.open('code copyed to clipboard',null,{ duration: 30000, panelClass: ['my-snack-bar']});
    }

}
