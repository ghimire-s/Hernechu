import React, { Component } from "react";
import Trailers from "../Trailers/Trailers";
import About from "../About";
import Home from "../Home/Home";
import Songs from "../Songs/Songs";
import Movies from "../Movies/Movies";
import MovieIndividual from "../Movie/Movie";
import "./body.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Loot",
          image:
            "https://image.tmdb.org/t/p/w220_and_h330_face/d9pQHVVf2FbfY6ayPM7qseVLc5K.jpg",
          year: "2012",
          length: "2h 1m",
          genre: ["action", "comedy"],
          rating: "PG-13",
          actor: [
            {
              name: "Reecha Sharma",
              image:
                "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg",
            },
            {
              name: "Keki Adhikari",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },
            {
              name: "Bipin Karki",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },

            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
          ],
          streaming: [
            "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/27/ad/4827ad2f-084b-2760-3d6d-5b26238decc0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
            "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/76/db/17/76db17fa-9ec6-86c4-4fc6-ec87bd7b01f0/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
          ],
          songs: ["Dui Rupaiyaa", "Kutu Ma Kutu", "Talkyo Jawani"],
        },
        {
          name: "White Sun",
          image:
            "https://image.tmdb.org/t/p/w220_and_h330_face/5XUuWAWwjb4OUgB3r8holAZzc7r.jpg",
          year: "2016",
          length: "1h 27m",
          genre: ["Drama,", "Adventure"],
          rating: "PG-13",
          actor: [
            {
              name: "Reecha Sharma",
              image:
                "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg",
            },
            {
              name: "Keki Adhikari",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },
            {
              name: "Bipin Karki",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },

            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
          ],
          streaming: [
            "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/27/ad/4827ad2f-084b-2760-3d6d-5b26238decc0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
            "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/76/db/17/76db17fa-9ec6-86c4-4fc6-ec87bd7b01f0/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
          ],
          songs: ["Dui Rupaiyaa", "Kutu Ma Kutu", "Talkyo Jawani"],
        },
        {
          name: "Chadke",
          image:
            "https://image.tmdb.org/t/p/w220_and_h330_face/hLgEKQu34McwUvYIPCZNXQ3cyvm.jpg",
          year: "2013",
          length: "2h 18m",
          genre: ["action", "Thriller", "Drama"],
          rating: "PG-13",
          actor: [
            {
              name: "Reecha Sharma",
              image:
                "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg",
            },
            {
              name: "Keki Adhikari",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },
            {
              name: "Bipin Karki",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },

            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
          ],
          streaming: [
            "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/27/ad/4827ad2f-084b-2760-3d6d-5b26238decc0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
            "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/76/db/17/76db17fa-9ec6-86c4-4fc6-ec87bd7b01f0/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
          ],
          songs: ["Dui Rupaiyaa", "Kutu Ma Kutu", "Talkyo Jawani"],
        },
        {
          name: "Sambodhan",
          image:
            "https://image.tmdb.org/t/p/w220_and_h330_face/5g3vy1WRKQ1VuMgWO3qZEpjJXyM.jpg",
          year: "2015",
          length: "2h 18m",
          genre: ["action", "drama"],
          rating: "PG-13",
          actor: [
            {
              name: "Reecha Sharma",
              image:
                "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg",
            },
            {
              name: "Keki Adhikari",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },
            {
              name: "Bipin Karki",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },

            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
          ],
          streaming: [
            "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/27/ad/4827ad2f-084b-2760-3d6d-5b26238decc0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
            "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/76/db/17/76db17fa-9ec6-86c4-4fc6-ec87bd7b01f0/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
          ],
          songs: ["Dui Rupaiyaa", "Kutu Ma Kutu", "Talkyo Jawani"],
        },
        {
          name: "Sano Sansar",
          image:
            "https://image.tmdb.org/t/p/w220_and_h330_face/OaqRENMQ7pz8wmqcm5YJ6aThg9.jpg",
          year: "1984",
          length: "2h 18m",
          genre: ["Drama", "comedy", "Family"],
          rating: "PG-13",
          actor: [
            {
              name: "Reecha Sharma",
              image:
                "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg",
            },
            {
              name: "Keki Adhikari",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },
            {
              name: "Bipin Karki",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },

            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
          ],
          streaming: [
            "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/27/ad/4827ad2f-084b-2760-3d6d-5b26238decc0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
            "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/76/db/17/76db17fa-9ec6-86c4-4fc6-ec87bd7b01f0/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
          ],
          songs: ["Dui Rupaiyaa", "Kutu Ma Kutu", "Talkyo Jawani"],
        },
        {
          name: "Basudev",
          image:
            "https://image.tmdb.org/t/p/w220_and_h330_face/1ENzbTXcJddkjaZ0untVuj7DLta.jpg",
          year: "2012",
          length: "2h 1m",
          genre: ["action", "comedy"],
          rating: "PG-13",
          actor: [
            {
              name: "Reecha Sharma",
              image:
                "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg",
            },
            {
              name: "Keki Adhikari",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },
            {
              name: "Bipin Karki",
              image:
                "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg",
            },

            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
            {
              name: "Saugat Malla",
              image:
                "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg",
            },
            {
              name: "Dayahang Rai",
              image:
                "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg",
            },
          ],
          streaming: [
            "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/27/ad/4827ad2f-084b-2760-3d6d-5b26238decc0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
            "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/76/db/17/76db17fa-9ec6-86c4-4fc6-ec87bd7b01f0/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
          ],
          songs: ["Dui Rupaiyaa", "Kutu Ma Kutu", "Talkyo Jawani"],
        },
      ],
    };
  }

  render() {
    const extrRoute = this.state.data.map((items) => {
      let pageRoute = `\/${items.name.toLowerCase()}`;
      return (
        <Route path={pageRoute} key={items.name}>
          <MovieIndividual movieName={items.name} key={items.name} />
        </Route>
      );
    });
    return (
      <div className="body">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/trailers">
            <Trailers />
          </Route>
          <Route path="/songs">
            <Songs />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Home data={this.state.data} />
          </Route>
          {extrRoute}
        </Switch>
      </div>
    );
  }
}
