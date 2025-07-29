#include <stdio.h>

void ft_ultimate_div_mod(int *a, int *b)
{
	int	c;

	int	d;

	c = *a / *b;

	d = *a % *b;

	*a = c;

	*b = d;

	printf("value at a is %d", *a);
	printf("value at b is %d", *b);
}

int main(void)
{

	int g = 5;
	int h = 6;


	ft_ultimate_div_mod(&g, &h);
}
