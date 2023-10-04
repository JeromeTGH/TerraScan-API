# TerraScan API

## Endpoints

Base url : *not specified*

| Paths | Description |
| --- | --- |
| / | Root testing |
| /api/totalsupplies/getPastValues | Get latest values of total supplies<br><br>Optional params :<br>- limit=? (20, 30, 50, 100, or 200 ; defaut=50)<br>- timeunit=? (H1, H4, D1, W1, M1, Y1 ; defaut=H1) |


## Server start commands

- **npm start** : standard execution, through NodeJS (prod)
- **npm run mon** : execution through "nodemon" (dev)

