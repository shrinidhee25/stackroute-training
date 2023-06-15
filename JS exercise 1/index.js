//converting into desired array

// var obj = {
//   "One": "1",
//   "Two": "2",
//   "Three": "3",
//   "Four": "4"
// };

// var arr = Object.values(obj);
// console.log(arr);



//sorting the array by title value
// function sortByTitle(arr) {
//     arr.sort(function(a, b) {
//       var titleA = a.title.toUpperCase();
//       var titleB = b.title.toUpperCase();
//       if (titleA < titleB) {
//         return -1;
//       }
//       if (titleA > titleB) {
//         return 1;
//       }
//       return 0;
//     });
//   }
  
//   var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
//   ];
  
//   sortByTitle(library);
//   console.log(library);
  



// a string and a letter argument
// function countOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   var str = 'gmail.com';
//   var letter = 'm';
//   var occurrences = countOccurrences(str, letter);
//   console.log(occurrences);



// chels property
//   var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
// var obj = JSON.parse(jsonStr);
// var chelsValue = obj.chels;
// console.log(chelsValue);




// extracting data from json
// var json = `{
// 	"status": "ok",
// 	"source": "the-next-web",
// 	"sortBy": "latest",
// 	"articles": [
// 		{
// 			"author": "Bryan Clark",
// 			"title": "Spotify is using billboards to call users out on their questionable listening habits",
// 			"description": "In a hilarious new marketing campaign, Spotify is taking to billboards to pose some rather serious questions (and provide commentary) about its users. One of the new billboards, for example, will read: “Dear person who made a playlist called: ‘One Night Stand With Jeb Bush Like He’s a Bond Girl in a European Casino.’ We …",
// 			"url": "http://thenextweb.com/music/2016/11/30/spotify-is-using-billboards-to-call-users-out-on-their-questionable-listening-habits/",
// 			"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-5.45.53-PM.png",
// 			"publishedAt": "2016-11-30T07:38:09Z"
// 		},
// 		{
// 			"author": "Bryan Clark",
// 			"title": "Man in VR headset falls off fake cliff and hits a very real floor",
// 			"description": "One day, we’ll have an entire Tumblr account for hilarious VR accidents, but until then, George Takei’s Facebook account will have to do. Takei, the Star Trek alum and current boss of sharing things on Facebook, recently shared a video of a man attempting to conquer a virtual cliff while inside an Oculus headset; it …",
// 			"url": "http://thenextweb.com/virtual-reality/2016/11/30/man-in-vr-headset-falls-off-fake-cliff-and-hits-a-very-real-floor/",
// 			"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/man-falling.png",
// 			"publishedAt": "2016-11-30T00:00:30Z"
// 		},
// 		{
// 			"author": "Napier Lopez",
// 			"title": "Microsoft's new app tries to fix Android's copy and paste problem",
// 			"description": "For an OS typically preferred by power-users, Android has an embarrassing amount of trouble with copy and paste. Sometimes it works just fine, but in other apps you can only copy entire huge swaths of text, or worse – nothing at all. Microsoft’s new Clip Layer app wants to fix that by letting you copy …",
// 			"url": "http://thenextweb.com/apps/2016/11/29/microsofts-new-app-tries-fix-androids-copy-paste-problem/",
// 			"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Microsoft-Clip-Layer.png",
// 			"publishedAt": "2016-11-29T22:11:20Z"
// 		}
// 	]
// }`;

// var data = JSON.parse(json);
// var articles = data.articles;

// var extractedData = articles.map(function(article) {
//   return {
//     author: article.author,
//     title: article.title,
//     description: article.description
//   };
// });

// console.log(extractedData);


  