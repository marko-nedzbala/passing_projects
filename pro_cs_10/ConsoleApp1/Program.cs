
Car myCar = new Car();
myCar.petName = "Henry";
myCar.currSpeed = 10;

for (int i = 0; i <= 10; i++)
{
    myCar.SpeedUp(5);
    myCar.PrintState();
}

Console.WriteLine();

Motorcycle myMotorcycle = new Motorcycle();
myMotorcycle.SetDriverName("Bob");
Console.WriteLine(myMotorcycle.name);

Console.ReadLine();

class Car
{
    public string petName;
    public int currSpeed;

    public void PrintState()
        => Console.WriteLine("{0} is going {1} MPH", petName, currSpeed);

    public void SpeedUp(int delta)
        => currSpeed += delta;
}

class Motorcycle
{
    public string name;
    public void SetDriverName(string name)
        => this.name = name;
}


