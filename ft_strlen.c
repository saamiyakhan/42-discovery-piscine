int	ft_strlen(char *str)
{
	int count = 0;

	while (*str != '\0')
	{
		count++;
		str++;
	}
	return count;
}

int main(void)
{
	int res;

	res = ft_strlen("Hello World");

	return res;
}

