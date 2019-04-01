import { Follower } from "./follower";
import { FollowersService } from "./../services/followers.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "githubfollowers",
  templateUrl: "./githubfollowers.component.html",
  styleUrls: ["./githubfollowers.component.css"]
})
export class GithubfollowersComponent implements OnInit {
  private followers: Follower[];
  constructor(private followerService: FollowersService) {}

  ngOnInit() {
    this.followerService.getAll().subscribe(response => {
      this.followers = response;
    });
  }
}
