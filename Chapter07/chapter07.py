import tkinter
from tkinter import END, StringVar, IntVar, scrolledtext, messagebox, filedialog
import tkinter.scrolledtext
from PIL import ImageTk, Image

root = tkinter.Tk()
root.title('Notepad')
root.iconbitmap('pad.ico')
root.geometry('600x600')
root.resizable(0, 0)

# define fonts and colors
text_color = '#fffacd'
menu_color = '#dbd9db'
root_color = '#6c809a'

root.config(bg=root_color)

# define functions
def change_font(event):
    if font_option.get() == 'none':
        my_font = (font_family.get(), font_size.get())
    else:
        my_font = (font_family.get(), font_size.get(), font_option.get())

    input_text.config(font=my_font)

def new_note():
    # clears the screen
    
    # use a messagebox to ask for a new note
    question = messagebox.askyesno('New Note?', 'Are you sure you want to start a new note?')
    # if the user pressed yes
    if question == 1:
        # Scrolledtext widgets start at 1.0
        input_text.delete('1.0', END)

def close_note():
    # closes the note, but asks for permission first
    question = messagebox.askyesno('Close Note?', 'Are you sure want to close your note?')
    if question == 1:
        root.destroy()

def save_note():
    # first 3 lines are:
    # 1.) font family
    # 2.) font size
    # 3.) font option
    save_name = filedialog.asksaveasfilename(initialdir='./', title='Save Note',
                                             filetypes=( ('Text files', '*.txt'), ('All files', '*.*') ))
    with open(save_name, 'w') as f:
        # the first 3 lines
        f.write(font_family.get() + '\n')
        f.write(str(font_size.get()) + '\n')
        f.write(font_option.get() + '\n')

        # write remaining text in the field to file
        f.write(input_text.get('1.0', END))

def open_note():
    # open a previously save note
    # consider the first 3 lines
    open_name = filedialog.askopenfilename(initialdir='./', title='Open Note',
                                             filetypes=( ('Text files', '*.txt'), ('All files', '*.*') ))
    with open(open_name, 'r') as f:
        input_text.delete('1.0', END)

        # set the first 3 lines
        font_family.set(f.readline().strip())
        font_size.set(int(f.readline().strip()))
        font_option.set(f.readline().strip())

        # call the change font for these .set() and passs an arbitary value
        change_font(1)

        text = f.read()
        input_text.insert('1.0', text)



# define layout

# define frames
menu_frame = tkinter.Frame(root, bg=menu_color)
menu_frame.pack(padx=5, pady=5)
text_frame = tkinter.Frame(root, bg=text_color)
text_frame.pack(padx=5, pady=5)

# layout for menu frames
# menu: new, open, save, close, font family, font size, font option
new_image = ImageTk.PhotoImage(Image.open('new.png'))
new_button = tkinter.Button(menu_frame, image=new_image, command=new_note)
new_button.grid(row=0, column=0, padx=5, pady=5)

open_image = ImageTk.PhotoImage(Image.open('open.png'))
open_button = tkinter.Button(menu_frame, image=open_image, command=open_note)
open_button.grid(row=0, column=1, padx=5, pady=5)

save_image = ImageTk.PhotoImage(Image.open('save.png'))
save_button = tkinter.Button(menu_frame, image=save_image, command=save_note)
save_button.grid(row=0, column=2, padx=5, pady=5)

close_image = ImageTk.PhotoImage(Image.open('close.png'))
close_button = tkinter.Button(menu_frame, image=close_image, command=close_note)
close_button.grid(row=0, column=3, padx=5, pady=5)

# create a list of fonts to use
families = ['Terminal', 'Modern', 'Script', 'Courier', 'Arial', 'Calibri',
            'Cambria', 'Georgia', 'MS Gothic', 'SimSun', 'Tahoma', 'Times New Roman',
            'Verdana', 'Wingdings']
font_family = StringVar()
font_family_drop = tkinter.OptionMenu(menu_frame, font_family, *families, command=change_font)
font_family.set('Terminal')
# set the width so it will fit the largest and remain constant
font_family_drop.config(width=16)
font_family_drop.grid(row=0, column=4, padx=5, pady=5)

size = [8, 10, 12, 14, 16, 20, 24, 32, 48, 64, 72, 96]
font_size = IntVar()
font_size_drop = tkinter.OptionMenu(menu_frame, font_size, *size, command=change_font)
font_size.set(12)
# set width to fit
font_size_drop.config(width=2)
font_size_drop.grid(row=0, column=5, padx=5, pady=5)

options = ['none', 'bold', 'italic']
font_option = StringVar()
option_drop = tkinter.OptionMenu(menu_frame, font_option, *options, command=change_font)
font_option.set('none')
# set width to be constant
option_drop.config(width=5)
option_drop.grid(row=0, column=6, padx=5, pady=5)


# layout for the text frame
my_font = (font_family.get(), font_size.get())


# scrollbar
# set default width and height to be more than the window size
# so that on smallest text size
input_text = tkinter.scrolledtext.ScrolledText(text_frame,  bg=text_color, font=my_font)
input_text.pack()



















root.mainloop()
