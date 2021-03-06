# geojson-tools

**Pre-requisites:**

Execute this code: `npm install minimist`

## Install:

```
git clone git@github.com:piligab/geojson-tools.git
cd geojson-tools/
npm link
```

## Tools:

Many times we have a .geojson file, but we want to make some changes, here you find:

- **Delete tags** --> `uid`, `id`, `user`, `timestamp`, `changeset` and `version`

  `tool deletetags <file>`

  We will obtain `output.geojson`

- **Change a tag value** --> string to integer(`"100"` to `100`)

  `tool changevalue <file>`

  We will obtain `outputcv.geojson`

- **Change .geojson to .poly** --> the geojson file should be a polygon

  `tool poly <file.geojson> > file.poly`

- **Polygon Area - m2-km2-ha** --> the geojson file should be a polygon

  `tool area <file.geojson> >`

- **Distance moved**

  `tool distancemoved input.geojson > output.geojson`

- **Add coordinates** --> add the coordinates of the points into the geojson as a new attributes

  `tool addcoord input.geojson > output.geojson`

- **Replace string** --> replace some caracteres into an attribute (*for a specific project*).

  `tool replacestr input.geojson > output.geojson`

- **Count POI's and tiles** --> convert an attribute in array, then it obtains a report per each POI and number of tiles inside the file (*for a specific project*).

  `tool countpoitile input.geojson`

- **Delete decimals** --> convert a decimal attribute into an integer.

  `tool deletedecimal input.geojson > output.geojson`




