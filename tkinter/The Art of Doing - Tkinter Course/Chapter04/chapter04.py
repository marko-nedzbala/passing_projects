import tkinter
from tkinter import ttk, END

root = tkinter.Tk()
root.title('Metric Helper')
root.resizable(0,0)

# define fonts and colors
field_font = ('Cambria', 10)
bg_color = '#c75c5c'
button_color = '#f5cf87'
root.config(bg=bg_color)

# define function
def convert():
    metric_values = {
        'femto': 10**-15,
        'pico': 10**-12,
        'nano': 10**-9,
        'micro': 10**-6,
        'milli': 10**-3,
        'centi': 10**-2,
        'deci': 10**-1,
        'base value': 10**0,
        'deca': 10**1,
        'hecto': 10**2,
        'kilo': 10**3,
        'mega': 10**6,
        'giga': 10**9,
        'tera': 10**12,
        'peta': 10**15
    }

    # clear output field
    output_field.delete(0, END)

    # get user information
    start_value = float(input_field.get())
    start_prefix = input_combobox.get()
    end_prefix = output_combobox.get()

    # convert
    base_value = start_value * metric_values[start_prefix]
    end_value = base_value / metric_values[end_prefix]

    # update output field
    output_field.insert(0, end_value)
    


# define layout
input_field = tkinter.Entry(root, width=20, font=field_font, borderwidth=3)
input_field.grid(row=0, column=0)
output_field = tkinter.Entry(root, width=20, font=field_font, borderwidth=3)
output_field.grid(row=0, column=2)
equal_label = tkinter.Label(root, text='=', font=field_font, bg=bg_color)
equal_label.grid(row=0, column=1)

input_field.insert(0, 'Enter your quantity')

# dropdowns
metric_list = ['femto', 'pico', 'nano', 'micro', 'milli', 'centi', 'deci', 
               'base value', 'deca', 'hecto', 'mega', 'giga', 'tera', 'peta']
input_combobox = ttk.Combobox(root, value=metric_list, font=field_font, justify='center')
input_combobox.set('base value')
input_combobox.grid(row=1, column=0, padx=10, pady=10)

output_combobox = ttk.Combobox(root, value=metric_list, font=field_font, justify='center')
output_combobox.grid(row=1, column=2, padx=10, pady=10)
output_combobox.set('base value')

# code for dropdown boxes
# input_choice = StringVar()
# input_choice.set('base value')
# output_choice = StringVar()
# output_choice.set('base value')
# input_dropdown = tkinter.OptionMenu(root, input_choice, *metric_list)
# input_dropdown.grid(row=1, column=0, padx=10, pady=10)
# output_dropdown = tkinter.OptionMenu(root, output_choice, *metric_list)
# output_dropdown.grid(row=1, column=2, padx=10, pady=10)

to_label = tkinter.Label(root, text='to', font=field_font, bg=bg_color)
to_label.grid(row=1, column=1)

# create a conversion button
convert_button = tkinter.Button(root, text='Convert', font=field_font, bg=button_color, command=convert)
convert_button.grid(row=2, column=0, columnspan=3, padx=10, pady=10, ipadx=50)

root.mainloop()