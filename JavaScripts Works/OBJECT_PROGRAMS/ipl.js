var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4}
]

//print number of team playing ipl 2021

console.log(point_table.length);

//print team names only

point_table.map(team=>team.t_name).forEach(name=>console.log(name))

//print teamdetails whose pts>10

point_table.filter(team=>team.pts>10).forEach(team=>console.log(team))

//is kkr playing ipl 2k21

var is_playing=point_table.some(team=>team.t_name=="kkr")
console.log(is_playing);

//sort team wrt loss desc

point_table.sort((team1,team2)=>team2.loss-team2.loss)
console.log(point_table);

//print team details who have max point

var max_team =point_table.reduce((team1,team2)=>team1.pts>team2.pts?team1:team2)
console.log(max_team);

//map wrt points 

var pts_count={}
for(let team of point_table)
{
    if( team.pts in pts_count)
    {
       pts_count[team.pts].push(team.t_name)
    }
    else{
        pts_count[team.pts]=[team.t_name]
    }
}
console.log(pts_count);

