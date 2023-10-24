# TerraScan API

An API for [TerraScan app](https://terrascan.jtapp.dev/)<br />
GitHub : https://github.com/JeromeTGH/Terra-Scan-API

## Endpoints

Base url : *private*

| Paths | Description |
| --- | --- |
| / | Root testing |
| /api/totalsupplies/getPastValues | Get historical values of LUNC and USTC total supplies<br><br>Optional params :<br>- limit=? (20, 30, 50, 100, or 200 ; defaut=50)<br>- timeunit=? (H1, H4, D1, W1, M1, Y1 ; defaut=H1) |
| /api/luncstaking/getPastValues | Get historical values of lunc staking (nb bonded tokens, and staking ratio)<br><br>Optional params :<br>- limit=? (20, 30, 50, 100, or 200 ; defaut=50)<br>- timeunit=? (H1, H4, D1, W1, M1, Y1 ; defaut=H1) |
| /api/communitypool/getPastValues | Get historical amounts of LUNC and USTC in Community Pool<br><br>Optional params :<br>- limit=? (20, 30, 50, 100, or 200 ; defaut=50)<br>- timeunit=? (H1, H4, D1, W1, M1, Y1 ; defaut=H1) |
| /api/oraclepool/getPastValues | Get historical amounts of LUNC and USTC in Oracle Pool<br><br>Optional params :<br>- limit=? (20, 30, 50, 100, or 200 ; defaut=50)<br>- timeunit=? (H1, H4, D1, W1, M1, Y1 ; defaut=H1) |



## License

BY-NC-ND 4.0 CC License<br />
Link : https://creativecommons.org/licenses/by-nc-nd/4.0/


## About

@2023<br />
Created by Jérôme TOMSKI<br />
Links : [Twitter](https://twitter.com/jerometomski) / [GitHub](https://github.com/JeromeTGH)