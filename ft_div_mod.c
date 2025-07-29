#include <stdio.h>

void	ft_div_mod(int a, int b, int *div, int *mod)
{
	int	res;

	int	rem;

	res = a / b;
	rem = a % b;

	*div = res;
	
	*mod = rem;

	printf("the div is %d", *div);
	printf("the mod is %d", *mod);
}

int main(void)
{
	int	c;
	int	d;

	c = 24;
	d = 10;

	int	div;
	int	mod;

	ft_div_mod(c, d, &div, &mod);
}
