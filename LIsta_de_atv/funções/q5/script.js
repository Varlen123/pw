let Humbertos = [
{nome: "varlen", idade: 13, skills: ["JavaScript"]},
{nome: "Matusalém", idade: 14, skills: ['Python']},
{nome: "Kayo", idade: 15, skills: ['JavaScript']},
{nome: "Sales", idade: 16, skills: ["React"] },
{ nome: "Raphael", idade: 17, skills: ["Java"]}
];
function achar(funcao, skill) {
 for (let Humbertos of funcao) {
  if (Humbertos.skills.includes(skill)) {
   console.log(Humbertos);
        }
        else{
   console.log("não encontrado")
        }
    }
}
achar(Humbertos, "Java");
