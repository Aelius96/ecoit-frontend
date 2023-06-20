import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  blogs = [
    {
      id: 1,
      title: 'Specialized Design Tools for 2019',
      excerpt:'Responsive design seems to have gone from zero to about a thousand miles an hour in no time flat. ' +
        'And things are still changing fast enough that small development shops are hard-pushed to stay up ' +
        'to date, let alone conduct their own R&amp;D. That’s where Foundation …',
      imageUrl:'assets/images/blog/mockups_white_matte_apple_watch_freebie-480x285.jpg'
    },
    {
      id: 2,
      title: 'Specialized Design Tools for 2019',
      excerpt:'Responsive design seems to have gone from zero to about a thousand miles an hour in no time flat. ' +
        'And things are still changing fast enough that small development shops are hard-pushed to stay up ' +
        'to date, let alone conduct their own R&amp;D. That’s where Foundation …',
      imageUrl:'assets/images/blog/mockups_white_matte_apple_watch_freebie-480x285.jpg'
    },
    {
      id: 3,
      title: 'Specialized Design Tools for 2019',
      excerpt:'Responsive design seems to have gone from zero to about a thousand miles an hour in no time flat. ' +
        'And things are still changing fast enough that small development shops are hard-pushed to stay up ' +
        'to date, let alone conduct their own R&amp;D. That’s where Foundation …',
      imageUrl:'assets/images/blog/mockups_white_matte_apple_watch_freebie-480x285.jpg'
    },
    {
      id: 4,
      title: 'Specialized Design Tools for 2019',
      excerpt:'Responsive design seems to have gone from zero to about a thousand miles an hour in no time flat. ' +
        'And things are still changing fast enough that small development shops are hard-pushed to stay up ' +
        'to date, let alone conduct their own R&amp;D. That’s where Foundation …',
      imageUrl:'assets/images/blog/mockups_white_matte_apple_watch_freebie-480x285.jpg'
    },
    {
      id: 5,
      title: 'Specialized Design Tools for 2019',
      excerpt:'Responsive design seems to have gone from zero to about a thousand miles an hour in no time flat. ' +
        'And things are still changing fast enough that small development shops are hard-pushed to stay up ' +
        'to date, let alone conduct their own R&amp;D. That’s where Foundation …',
      imageUrl:'assets/images/blog/mockups_white_matte_apple_watch_freebie-480x285.jpg'
    },
    {
      id: 6,
      title: 'Specialized Design Tools for 2019',
      excerpt:'Responsive design seems to have gone from zero to about a thousand miles an hour in no time flat. ' +
        'And things are still changing fast enough that small development shops are hard-pushed to stay up ' +
        'to date, let alone conduct their own R&amp;D. That’s where Foundation …',
      imageUrl:'assets/images/blog/mockups_white_matte_apple_watch_freebie-480x285.jpg'
    },
  ]
}
