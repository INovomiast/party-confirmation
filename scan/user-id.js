//URL
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let user_id = urlParams.get('scan-id');

//Variables

/**
 * User ID's
 * 
 * 
 *  user_ids[0] = Ruben
 *  user_ids[1] = Raquel
 *  user_ids[2] = Borys
 *  user_ids[3] = Leonardo
 *  user_ids[4] = MarcosM
 *  user_ids[5] = AlePino
 *  user_ids[6] = Aaron
 *  user_ids[7] = SergioM
 *  user_ids[8] = Andres
 *  user_ids[9] = Leticia
 *  user_ids[10] = Lucia
 *  user_ids[11] = Sofia
 */

const user_ids = ['1fx2rqe1xz41p9', '1fx2zv1xz4an', '1fx2ilb1xz4cw5', '1fx2txo1xz479b', '1fx2viy1xz455s', '1fx2fqu1xz410td', '1fx2kgg1xz4e8e', '1fx278z1xz4qe7', '1fx2csb1xz4t0b', '1fx2uk91xz4odf', '1fx28ui1xz4ecj', '1fx21181xz4f0p'];
const user_names = ['Ruben', 'Raquel', 'Borys', 'Leonardo', 'MarcosM', 'Alejandro Pino', 'Aaron', 'Sergio Marian', 'Andres', 'Leticia', 'Lucia', 'Sofia'];
const user_ages = ['16', '17', '16', '16', '16', '15', '17', '16', '16', '16', '16', '16'];
const token_q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const asisted = ['No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'];
const colors = ['red', 'green', 'blue', 'purple', 'cyan', 'orange', 'brown', 'red', 'blue', 'green', 'yellow', 'yellow'];

//Elements
const user_name = document.getElementById('');
const