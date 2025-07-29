// #include <stdio.h>
void ft_swap(int *a, int *b)
{
	int	c;

	c = *a;

	*a = *b;

	*b = c;

	// printf("i is %d and j is %d", *a, *b);
}

/* int main(void)
{
	int *d;
	int *e;

	int i;
	int j;

	i = 6;
	j = 10;

	d = &i;
	e = &j;

	ft_swap(d, e);
} */
