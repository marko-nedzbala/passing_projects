import tkinter
from tkinter import END, ANCHOR

root = tkinter.Tk()
root.title('Simple Checklist')
root.geometry('400x400')
root.resizable(0, 0)

my_font = ('Times New Roman', 12)
root_color = '#6c1cbc'
button_color = '#e2cff4'

root.config(bg=root_color)

# define functions

def add_item():
    my_listbox.insert(END, list_entry.get())
    list_entry.delete(0, END)

def remove_item():
    # remove the selected, anchor, item from the listbox
    my_listbox.delete(ANCHOR)

def clear_list():
    # delete all items from the listbox
    my_listbox.delete(0, END)

def save_list():
    # save the items
    with open('checklist.txt', 'w') as f:
        list_tuple = my_listbox.get(0, END)
        for item in list_tuple:
            # avoid always writing new line
            if item.endswith('\n'):
                f.write(item)
            else:
                f.write(item + '\n')

def open_list():
    # open the list upon startup if it exists
    try:
        with open('checklist.txt', 'r') as f:
            for line in f:
                # start at the END to keep the list in order
                my_listbox.insert(END, line)
    except:
        return


# define layout

# frames
input_frame = tkinter.Frame(root, bg=root_color)
output_frame = tkinter.Frame(root, bg=root_color)
button_frame = tkinter.Frame(root, bg=root_color)

input_frame.pack()
output_frame.pack()
button_frame.pack()

# input frame layout
list_entry = tkinter.Entry(input_frame, width=35, borderwidth=3, font=my_font)
list_entry.grid(row=0, column=0, padx=5, pady=5)
list_add_button = tkinter.Button(input_frame, text='Add Item', borderwidth=2, font=my_font, bg=button_color, command=add_item)
list_add_button.grid(row=0, column=1, padx=5, pady=5, ipadx=5)

# output frame layout
# scroll bar
my_scrollbar = tkinter.Scrollbar(output_frame)
# yscrollcommand is set to the 
my_listbox = tkinter.Listbox(output_frame, height=15, width=45, borderwidth=3, font=my_font, yscrollcommand=my_scrollbar.set)

# scroll bar
my_scrollbar = tkinter.Scrollbar(output_frame)
# link the scrollbar to the list box
my_scrollbar.config(command=my_listbox.yview)

my_listbox.grid(row=0, column=0)

# sticky to put it from top to bottom
my_scrollbar.grid(row=0, column=1, sticky='NS')


# button frame layout
list_remove_button = tkinter.Button(button_frame, text='Remove Item', borderwidth=2, font=my_font, bg=button_color, command=remove_item)
list_remove_button.grid(row=0, column=0, padx=2, pady=10)
list_clear_button = tkinter.Button(button_frame, text='Clear List', borderwidth=2, font=my_font, bg=button_color, command=clear_list)
list_clear_button.grid(row=0, column=1, padx=2, pady=10, ipadx=10)
save_button = tkinter.Button(button_frame, text='Save List', borderwidth=2, font=my_font, bg=button_color, command=save_list)
save_button.grid(row=0, column=2, padx=2, pady=10, ipadx=10)
quit_button = tkinter.Button(button_frame, text='Quit', borderwidth=2, font=my_font, bg=button_color, command=root.destroy)
quit_button.grid(row=0, column=3, padx=2, pady=10, ipadx=25)

# open the previous list if avialble
open_list()
































root.mainloop()
