// This is server

var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	credentials = require('./credentials.js'),
	reverterMerger = require('./reverterMerger.js'),
	Twit = require('twit'),
	T = new Twit(credentials.twitter),
	fs = require('fs'),
	gm = require('gm'),
	gmstate,
	gmstateRow,
	n,
	m,
	imagesArray = [];

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// this is where the Parse API should make a post reques
/*app.post('/parse/', function (req, res) {
	res.send(req.body);
	console.log(req.body);
});*/

// This function handle the attachment
function handleAttachment(att){
	//I am handling the attachment which is in PNG

	// I need to resize the photo in order to cut unused space

	// Revert the transparent with white color and the non-transparent in transparent
}

function handleHashtag(hash){
	//Look for the hashtag on twitter
	T.get('search/tweets', { q: hash, count: 100 }, function(err, data, response) {
		//Store all the pics of all users who tweeted in imagesArray
		if (err) {
  			console.log(err);
  			return;
  		}
		for (var i = 0; i < data.statuses.length; i++) {
			imagesArray.push(data.statuses[i].user.profile_image_url);
		};

		m = Math.floor(Math.sqrt(imagesArray.length));
		//n = m/4;

		var mosaic = function() {
			gmstateRow = gm("0.png");

			for (var i = 1; i < m; i++) {
				gmstateRow.append(i+".png");
				console.log("appending" + i+".png");
			}

			// finally write out the file asynchronously
			gmstateRow.write('picFrame.png', function (err) {
				if (err) {
					console.log(err);
				}
				else if (!err) {
					console.log('Hooray picFrame!');
					server.close();
				}
			});	
		}

		for (var k = 0; k < m; k++) {

			gmstate = gm(imagesArray[0+k*m]);

			for (var i = 1+k*m; i < m+k*m; i++) {
				gmstate.append(imagesArray[i], true);
			}
			// finally write out the file asynchronously

			gmstate.write(k +'.png', function (err) {
				// cereqte a counter
				console.log("writing " + k + " image");

				if (err) {
					console.log(err);
				}
				else
					mosaic();
			});

		}	
	});

	//Turn that photo into the logo (merge with handleAttachment)
}
handleHashtag("aghacks");

function sendEmail(address){
	//Send the image to that address

}

// this function will take the two photos and try to get the best size possible for them
function syncImageSizes(logo, picFrame, outputName){
	gm(picFrame)
	.size(function (err, sizePicFrame) {
		if (!err){
			gm(logo)	
			.resizeExact(sizePicFrame.width, sizePicFrame.width)
			.write(outputName, function (err) {
  				if (!err) console.log('done');
  			});
		}
		else
			console.log('error while calling size on picFrame in function syncImageSizes');
	});
}

// this function will revert And Merge the Photos 
function revertAndMergePhotos(logo, picFrame, outputName){
	reverterMerger.revertAndMerge(logo, picFrame, outputName);
}

function save(finalImage, date, address, hash, picFrame){
	//Store in the db the final image with the date when it was created, the address of the requester, the hashtag and the original frame of all users
}


var server = app.listen(3000, function () {
  var host = server.address().address,
  	  port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});