let examplePosts = [
	{
		"id": 1911,
		"date": "2021-10-03T06:19:04",
		"date_gmt": "2021-10-03T06:19:04",
		"link": "https://essential-blocks.com/",
		"title": {
			"rendered": "Maxime veritatis iusto voluptatem ut"
		},
		"excerpt": {
			"rendered": "<p>Et itaque quam reiciendis autem qui voluptates nobis voluptas reprehenderit dolor incidunt debitis corrupti hic rem consectetur quis sed porro dolorem sed veniam quas dolorem fugiat ea repudiandae.</p>\n",
			"protected": false
		},
		"_embedded": {
			"author": [
				{
					"id": 2,
					"name": "Shaikat Islam",
					"link": "https://essential-blocks.com/",
					"slug": "shaikat",
					"avatar_urls": {
						"96": "http://0.gravatar.com/avatar/6b6b13eb7d4f528d1a8c081797830a37?s=96&d=mm&r=g"
					},
				}
			],
			"wp:featuredmedia": [
				{
					"id": 1912,
					"link": "https://essential-blocks.com/",
					"alt_text": "",
					"source_url": "https://essential-blocks.com/",
				}
			],
			"wp:term": [
				[
					{
						"link": "https://essential-blocks.com/",
						"name": "Fashion",
						"slug": "fashion",
						"taxonomy": "category",
					},
				],
			]
		}
	}
];

const Example = {
	attributes: {
		queryResults: examplePosts
	}
}

export default Example;