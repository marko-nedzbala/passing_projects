import tkinter
from tkinter import END
from tkinter import BOTH, StringVar
from PIL import ImageTk, Image


root = tkinter.Tk()
root.title('Hello GUI World')
root.iconbitmap('wave.ico')
root.geometry('400x400')
root.resizable(0, 0)

# define fonts and colors
root_color = '#224870'
input_color = '#2a4494'
output_color = '#4ea5d9'
root.config(bg=root_color)

# define functions
def submit_name():
    if case_style.get() == 'normal':
        name_label = tkinter.Label(output_frame, text='Hello ' + name.get() + '! Keep going!',
                                   bg=output_color)
    elif case_style.get() == 'upper':
        name_label = tkinter.Label(output_frame, text=('Hello ' + name.get() + '! Keep going!').upper(),
                                   bg=output_color)
    name_label.pack()

    # clear the entry field
    name.delete(0, END)

# define layout
# define the frames
input_frame = tkinter.LabelFrame(root, bg=input_color)
output_frame = tkinter.LabelFrame(root, bg=output_color)
input_frame.pack(pady=10)
output_frame.pack(padx=10, pady=(0, 10), fill=BOTH, expand=True)

# create widgets
name = tkinter.Entry(input_frame, text='Enter your name', width=20)
name.grid(row=0, column=0, padx=10, pady=10)
submit_button = tkinter.Button(input_frame, text='Submit', command=submit_name)
# ipadx is internal padding on 'x'
submit_button.grid(row=0, column=1, padx=10, pady=10, ipadx=20)

# create radio buttons for text display
case_style = StringVar()
case_style.set('normal')
normal_button = tkinter.Radiobutton(input_frame, text='Normal Case', 
                                    variable=case_style, 
                                    value='normal',
                                    bg=input_color)
normal_button.grid(row=1, column=0, padx=2, pady=2)
upper_button = tkinter.Radiobutton(input_frame, text='Normal Case', 
                                    variable=case_style, 
                                    value='upper',
                                    bg=input_color)
upper_button.grid(row=1, column=1, padx=2, pady=2)

# add an image
simle_image = ImageTk.PhotoImage(Image.open('smile.png'))
simle_label = tkinter.Label(output_frame, image=simle_image, bg=output_color)
simle_label.pack()





root.mainloop()

























