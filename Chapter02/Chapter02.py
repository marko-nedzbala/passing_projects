import tkinter
root = tkinter.Tk()
root.title('Window Basics')
root.geometry('500x500')

# name_button = tkinter.Button(root, text='Name')
# name_button.grid(row=0, column=0)
#
# time_button = tkinter.Button(root, text='Time', bg='#00ffff')
# time_button.grid(row=0, column=1)
#
# place_button = tkinter.Button(root, text='Place', bg='#00ffff', activebackground='#ff0000')
# place_button.grid(row=0, column=2, padx=10, pady=10, ipadx=15)
#
# day_button = tkinter.Button(root, text='Day', bg='black', fg='white', borderwidth=5)
# # span the entire 3 columns
# day_button.grid(row=1, column=0, columnspan=3, sticky='WE')

# images
my_image = tkinter.PhotoImage(file='Proof.png')
my_label = tkinter.Label(root, image=my_image)
my_label.pack()











root.mainloop()


