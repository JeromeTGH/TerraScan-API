# TerraScan API

An API for [TerraScan app](https://terrascan.jtapp.dev/)<br />
GitHub : https://github.com/JeromeTGH/Terra-Scan-API

## Endpoints

Base url : *private*

| Paths | Description |
| --- | --- |
| / | Root testing |
| /api/totalsupplies/getPastValues | Get latest values of total supplies<br><br>Optional params :<br>- limit=? (20, 30, 50, 100, or 200 ; defaut=50)<br>- timeunit=? (H1, H4, D1, W1, M1, Y1 ; defaut=H1) |
| /api/totalsupplies/getPastValues2 | Internal (for testing) |


## Server start commands

- **npm start** : standard execution, through NodeJS (prod)
- **npm run mon** : execution through "nodemon" (dev)


## License

BY-NC-ND 4.0 CC License<br />
Link : https://creativecommons.org/licenses/by-nc-nd/4.0/


## About

@2023<br />
Created by Jérôme TOMSKI<br />
Links : [Twitter](https://twitter.com/jerometomski) / [GitHub](https://github.com/JeromeTGH)