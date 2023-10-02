// Tipos numéricos
int inteiro = 42;
double pontoFlutuante = 3.14;
float pontoFlutuanteSimples = 2.718f;
decimal decimalValor = 123.456m;

// // Tipos booleanos
bool verdadeiro = true;
bool falso = false;

// // Caracteres
char caractere = 'A';

// // Strings
string texto = "Olá, mundo!";

// // Arrays
int[] arrayDeInteiros = { 1, 2, 3, 4, 5 };
string[] arrayDeStrings = { "Maçã", "Banana", "Cereja" };

static enum DiaDaSemana
{
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado
}

DiaDaSemana hoje = DiaDaSemana.Quarta;
Console.WriteLine($"Valor: {inteiro} - Tipo: {inteiro.GetType()}");
Console.WriteLine($"Valor: {pontoFlutuante} - Tipo: {pontoFlutuante.GetType()}");
Console.WriteLine($"Valor: {pontoFlutuanteSimples} - Tipo: {pontoFlutuanteSimples.GetType()}");
Console.WriteLine($"Valor: {decimalValor} - Tipo: {decimalValor.GetType()}");
Console.WriteLine($"Valor: {verdadeiro} - Tipo: {verdadeiro.GetType()}");
Console.WriteLine($"Valor: {falso} - Tipo: {falso.GetType()}");
Console.WriteLine($"Valor: {caractere} - Tipo: {caractere.GetType()}");
Console.WriteLine($"Valor: {texto} - Tipo: {texto.GetType()}");
Console.WriteLine($"Valor: [ 1, 2, 3, 4, 5 ] - Tipo: {arrayDeInteiros.GetType()}");
Console.WriteLine($"Valor: [ 'Maçã', 'Banana', 'Cereja' ] - Tipo: {arrayDeStrings.GetType()}");
Console.WriteLine($"Valor: {hoje} - Tipo: {hoje.GetType()}");
