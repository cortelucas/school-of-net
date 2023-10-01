using static System.Console;
// See https://aka.ms/new-console-template for more information
int idade = 29;
string nome = "Lucas";
bool ativo = true;
decimal salario = 1245.98M;
float descontos = 398.99f;

string eAtivo = ativo == true ? "ativo" : "inativo";

WriteLine($"O Usuário {nome} tem {idade} anos de idade, está {eAtivo} no sistema. Recebe por mês o salário de R$ {salario}.");
WriteLine($"Desconto: R$ {descontos}");
dynamic x = "Esta variável é uma string.";
WriteLine(x);

x = 10;
WriteLine(x);

ReadKey();
