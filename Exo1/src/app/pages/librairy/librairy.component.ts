import { Component } from '@angular/core';
import { EmojiPipe } from '../../utils/pipes/emoji.pipe';
import { FormsModule } from '@angular/forms';
interface Book {
  title: string;
  author: string;
  isRead: boolean;
}

@Component({
  selector: 'app-librairy',
  standalone: true,
  imports: [EmojiPipe, FormsModule],
  templateUrl: './librairy.component.html',
  styleUrl: './librairy.component.css',
})
export class LibrairyComponent {
  livres: Book[] = [
    { title: '1984', author: 'George Orwell', isRead: true },
    { title: 'Brave New World', author: 'Aldous Huxley', isRead: false },
    { title: 'Fahrenheit 451', author: 'Ray Bradbury', isRead: false },
  ];

  livre : Book = {
    title : '',
    author : '', 
    isRead : false, 
  }
  isSubmitted : boolean = false

  isRead(index : number){
    this.livres[index].isRead == false ? this.livres[index].isRead = true : this.livres[index].isRead = false
  }

  submitLivre() : void {
    this.isSubmitted = true
    this.livres.push(this.livre)
    console.log(this.livre);
    this.resetForm()
  }
  
  resetForm(){
    this.livre = {
      title : '',
      author : '', 
      isRead : false, 
    }
  }

}
