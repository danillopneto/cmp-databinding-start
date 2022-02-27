import { 
  AfterContentChecked, AfterContentInit, AfterViewChecked, 
  AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, 
  OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild 
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  
  constructor() {
    console.log('constructor called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log(`Paragraph Content: ${this.paragraph.nativeElement.textContent}`);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnInit called!');
    console.log(changes);
  }

  ngOnDestroy(): void {
    alert(`The server ${this.name} was destroyed.`);
    console.log('ngOnDestroy called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
    console.log(`Paragraph Content: ${this.paragraph.nativeElement.textContent}`);
  }
}
