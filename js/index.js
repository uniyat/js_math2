var first_number = Number (prompt ('Введіть число а:'));
var second_number = Number (prompt ('Введіть число b:'));
var third_number = Number (prompt ('Введіть число с:'));
var = d,x1,x2;
function make() {
d=Math.sqrt( -b ) / ( 2 * a );
if (d < 0)
 {result = 'Рівняння не має дійсних коренів'};
if (d = 0) 
{result = 'Рівняння має 1 корінь'};
if (d > 0) 
{result = 'Рівняння має 2 кореня'};
x1 = (-b - Math.sqrt(d))/(2*a);
x2 = (-b + Math.sqrt(d))/(2*a);
document.write(result);
}