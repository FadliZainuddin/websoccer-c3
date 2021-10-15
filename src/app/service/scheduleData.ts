import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
    {id:1, playingDate:new Date(2021,08,10),HomeTeam:'Persija', 
    AwayTeam:'Bali United', HomeScore:3, AwayScore:2, 
    RefName:'Joko', notes:'Pertandingan Overtime'},
    {id:2, playingDate:new Date(2021,08,11),HomeTeam:'EVOS', 
    AwayTeam:'Persipon', HomeScore:3, AwayScore:2, 
    RefName:'kasjo', notes:'Pertandingan Ngelek'},
    {id:3, playingDate:new Date(2021,08,13),HomeTeam:'RRQ', 
    AwayTeam:'ALTER EGO', HomeScore:3, AwayScore:2, 
    RefName:'KB', notes:'Pertandingan BO 3'},
    {id:4, playingDate:new Date(2021,08,16),HomeTeam:'ONIC', 
    AwayTeam:'BTR', HomeScore:3, AwayScore:2, 
    RefName:'Ranger Emas', notes:'Pertandingan BO 3'},
    {id:5, playingDate:new Date(2021,08,10),HomeTeam:'AURA', 
    AwayTeam:'GENFLIX', HomeScore:3, AwayScore:2, 
    RefName:'Pulung', notes:'Pertandingan BO 3'}
]
export const TEAM:Team [] = [
    {id:1, name:'EVOS', type:'Over 30'},
    {id:2, name:'Persija', type:'Over 30'},
    {id:3, name:'RRQ', type:'Over 30'},
    {id:4, name:'BTR', type:'Over 30'},
    {id:5, name:'ALTER EGO', type:'Over 30'},
    {id:6, name:'GENFLIX', type:'Over 30'},
]