//esse é o modulo 2

console.log('módulo dois sendo carregado e executado');

var _ = require('lodash');

// esses dados foram gerados utilizando o:
//https://www.mockaroo.com/

var pessoas = [{
  "id": 1,
  "first_name": "Matthew",
  "last_name": "Gibson",
  "email": "mgibson0@privacy.gov.au",
  "gender": "Male",
  "ip_address": "110.148.93.188"
}, {
  "id": 2,
  "first_name": "Michael",
  "last_name": "Mitchell",
  "email": "mmitchell1@bing.com",
  "gender": "Male",
  "ip_address": "81.230.84.44"
}, {
  "id": 3,
  "first_name": "Aaron",
  "last_name": "Olson",
  "email": "aolson2@macromedia.com",
  "gender": "Male",
  "ip_address": "24.240.165.163"
}, {
  "id": 4,
  "first_name": "Wayne",
  "last_name": "George",
  "email": "wgeorge3@google.pl",
  "gender": "Male",
  "ip_address": "80.20.83.236"
}, {
  "id": 5,
  "first_name": "Mark",
  "last_name": "Moreno",
  "email": "mmoreno4@github.com",
  "gender": "Male",
  "ip_address": "50.234.111.115"
}, {
  "id": 6,
  "first_name": "Steve",
  "last_name": "Evans",
  "email": "sevans5@nbcnews.com",
  "gender": "Male",
  "ip_address": "103.127.72.247"
}, {
  "id": 7,
  "first_name": "Doris",
  "last_name": "Torres",
  "email": "dtorres6@dropbox.com",
  "gender": "Female",
  "ip_address": "122.144.141.28"
}, {
  "id": 8,
  "first_name": "Judy",
  "last_name": "Nelson",
  "email": "jnelson7@lycos.com",
  "gender": "Female",
  "ip_address": "87.56.241.105"
}, {
  "id": 9,
  "first_name": "Jerry",
  "last_name": "Franklin",
  "email": "jfranklin8@walmart.com",
  "gender": "Male",
  "ip_address": "91.145.92.152"
}, {
  "id": 10,
  "first_name": "Gregory",
  "last_name": "Chavez",
  "email": "gchavez9@home.pl",
  "gender": "Male",
  "ip_address": "178.149.186.217"
}, {
  "id": 11,
  "first_name": "Jonathan",
  "last_name": "Gray",
  "email": "jgraya@soundcloud.com",
  "gender": "Male",
  "ip_address": "103.126.99.56"
}, {
  "id": 12,
  "first_name": "Keith",
  "last_name": "Wood",
  "email": "kwoodb@spotify.com",
  "gender": "Male",
  "ip_address": "147.147.31.88"
}, {
  "id": 13,
  "first_name": "Debra",
  "last_name": "Morales",
  "email": "dmoralesc@stumbleupon.com",
  "gender": "Female",
  "ip_address": "189.211.138.150"
}, {
  "id": 14,
  "first_name": "Walter",
  "last_name": "Martinez",
  "email": "wmartinezd@google.co.uk",
  "gender": "Male",
  "ip_address": "206.99.127.31"
}, {
  "id": 15,
  "first_name": "Christina",
  "last_name": "Hunter",
  "email": "chuntere@woothemes.com",
  "gender": "Female",
  "ip_address": "75.183.106.128"
}, {
  "id": 16,
  "first_name": "Randy",
  "last_name": "Ramirez",
  "email": "rramirezf@harvard.edu",
  "gender": "Male",
  "ip_address": "243.148.35.214"
}, {
  "id": 17,
  "first_name": "Teresa",
  "last_name": "Riley",
  "email": "trileyg@digg.com",
  "gender": "Female",
  "ip_address": "108.131.197.156"
}, {
  "id": 18,
  "first_name": "Justin",
  "last_name": "Alexander",
  "email": "jalexanderh@facebook.com",
  "gender": "Male",
  "ip_address": "239.126.139.212"
}, {
  "id": 19,
  "first_name": "Eric",
  "last_name": "Kennedy",
  "email": "ekennedyi@wp.com",
  "gender": "Male",
  "ip_address": "236.207.68.223"
}, {
  "id": 20,
  "first_name": "Catherine",
  "last_name": "Thompson",
  "email": "cthompsonj@bbc.co.uk",
  "gender": "Female",
  "ip_address": "209.171.80.123"
}]

totalMulheres = _.filter(pessoas, {gender: "Female"}).length;

alert('Total de mulheres: ' + totalMulheres);

var _ = require('lodash');