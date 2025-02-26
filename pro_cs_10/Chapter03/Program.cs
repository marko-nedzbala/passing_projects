// See https://aka.ms/new-console-template for more information


int[] ind = new int[5];

for (int i = 0; i < 5; i++)
{
    ind[i] = i;
}

foreach (int i in ind)
{
    //Console.WriteLine(i);
}

//Console.WriteLine(ind[^1]);
//Console.WriteLine(ind[^4]);

Range r1 = 1..3; //the end of the range is exclusive
foreach (int i in ind[r1])
{
    Console.WriteLine(ind[i]);
}

Console.WriteLine();

Range r2 = 3..5;
foreach (int i in ind[r2])
{
    Console.WriteLine(ind[i]);
}

Console.WriteLine();

static int ReadOnly(in int x, in int y)
{
    int ans = x + y;
    return ans;
}

//int a = 10;
//int b = 21;

var res = ReadOnly(10, 11);
Console.WriteLine(res);