import tkinter
from tkinter import BOTH, IntVar, DISABLED, filedialog


root = tkinter.Tk()
root.title('Color Theme Maker')
# root.iconbitmap('color_wheel.ico')
root.geometry('450x500')
root.resizable(0, 0)

# define functions
def get_red(slider_value):
    # take value and convert to hex
    global red_value
    red_value = hex(int(slider_value))
    red_value = red_value.lstrip('0x')
    while len(red_value) < 2:
        red_value = '0' + str(red_value)

    update_color()

def get_green(slider_value):
    # take value and convert to hex
    global green_value
    green_value = hex(int(slider_value))
    green_value = green_value.lstrip('0x')
    while len(green_value) < 2:
        green_value = '0' + str(green_value)

    update_color()

def get_blue(slider_value):
    # take value and convert to hex
    global blue_value
    blue_value = hex(int(slider_value))
    blue_value = blue_value.lstrip('0x')
    while len(blue_value) < 2:
        blue_value = '0' + str(blue_value)

    update_color()

def update_color():
    color_box = tkinter.Label(input_frame, bg='#' + red_value + green_value + blue_value, height=6, width=15)
    color_box.grid(row=1, column=3, columnspan=2, padx=35, pady=10)

    color_tuple.config(text='(' + str(red_slider.get()) + '),' 
                            + '(' + str(green_slider.get()) + '),'
                            + '(' + str(blue_slider.get()) + ')')
    color_hex.config(text='#' + red_value + green_value + blue_value)

def set_color(r, g, b):
    red_slider.set(r)
    green_slider.set(g)
    blue_slider.set(b)

def store_color():
    # get the current value of each slider and append 0s to keep formatting
    global stored_colors

    red = str(red_slider.get())
    while len(red) < 3:
        red = '0' + red

    green = str(green_slider.get())
    while len(green) < 3:
        green = '0' + green

    blue = str(blue_slider.get())
    while len(blue) < 3:
        blue = '0' + blue  

    stored_red = red_slider.get()
    stored_green = green_slider.get()
    stored_blue = blue_slider.get()

    recall_button = tkinter.Button(output_frame, text='Recall Color',
                                    command=lambda: set_color(stored_red, stored_green, stored_blue))
    new_color_tuple = tkinter.Label(output_frame, text='(' + red + '),' + '(' + green + '),' + '(' + blue + ')')
    new_color_hex = tkinter.Label(output_frame, text='#' + red_value + green_value + blue_value)
    new_color_black_box = tkinter.Label(output_frame, bg='black', width=3, height=1)
    new_color_box = tkinter.Label(output_frame, bg='#' + red_value + green_value + blue_value,
                                    width=3, height=1)

    # place widgets on the screen
    recall_button.grid(row=stored_color.get(), column=1, padx=20)
    new_color_tuple.grid(row=stored_color.get(), column=2, padx=20)
    new_color_hex.grid(row=stored_color.get(), column=3, padx=20)
    new_color_black_box.grid(row=stored_color.get(), column=4, pady=2, ipadx=5, ipady=5)
    new_color_box.grid(row=stored_color.get(), column=4)

    # update the stored_colors with new color tuple and hex values
    stored_colors[stored_color.get()] = [new_color_tuple.cget('text'), new_color_box.cget('text')]

    # move the radio button stored_colors to the next value if avilable
    if stored_color.get() < 5:
        stored_color.set(stored_color.get() + 1)

def save_colors():
    file_name = filedialog.asksaveasfilename(initialdir='./', title='Save Colors',
                                             filetypes=( ('text', '.txt'), ('All Files', '*.*') ))
    with open(file_name, 'w') as f:
        f.write('Color Theme Make Output\n')
        for saved_entry in stored_colors.values():
            f.write(saved_entry[0] + '\n' + saved_entry[1] + '\n\n')
    



# define layout
# padx and pady when creating the LabelFrame to get the padding within the frame
input_frame = tkinter.LabelFrame(root, padx=5, pady=5)
input_frame.pack(fill=BOTH, expand=True, padx=5, pady=5)
output_frame = tkinter.LabelFrame(root)
output_frame.pack(fill=BOTH, expand=True, padx=5, pady=5)

# setting up the input frame
# sliders, buttons

# red slider
red_label = tkinter.Label(input_frame, text='R')
red_slider = tkinter.Scale(input_frame, from_=0, to=255, command=get_red)
red_button = tkinter.Button(input_frame, text='Red', command=lambda: set_color(255, 0, 0))

# green slider
green_label = tkinter.Label(input_frame, text='G')
green_slider = tkinter.Scale(input_frame, from_=0, to=255, command=get_green)
green_button = tkinter.Button(input_frame, text='Green', command=lambda: set_color(0, 255, 0))

# blue slider
blue_label = tkinter.Label(input_frame, text='B')
blue_slider = tkinter.Scale(input_frame, from_=0, to=255, command=get_blue)
blue_button = tkinter.Button(input_frame, text='Blue', command=lambda: set_color(0, 0, 255))

# create buttons
yellow_button = tkinter.Button(input_frame, text='Yellow', command=lambda: set_color(255, 255, 0))
cyan_button = tkinter.Button(input_frame, text='Cyan', command=lambda: set_color(0, 255, 255))
magenta_button = tkinter.Button(input_frame, text='Magenta', command=lambda: set_color(255, 0, 255))

# create utility buttons
store_button = tkinter.Button(input_frame, text='Store Color', command=store_color)
save_button = tkinter.Button(input_frame, text='Save', command=save_colors)
quit_button = tkinter.Button(input_frame, text='Quit', command=root.destroy)

# put labels, sliders and buttons
red_label.grid(row=0, column=0, sticky='W')
red_slider.grid(row=1, column=0, sticky='W')
red_button.grid(row=2, column=0, padx=1, pady=1, ipadx=20)

green_label.grid(row=0, column=1, sticky='W')
green_slider.grid(row=1, column=1, sticky='W')
green_button.grid(row=2, column=1, padx=1, pady=1, ipadx=15)

blue_label.grid(row=0, column=2, sticky='W')
blue_slider.grid(row=1, column=2, sticky='W')
blue_button.grid(row=2, column=2, padx=1, pady=1, ipadx=18)

yellow_button.grid(row=3, column=0, padx=1, pady=1, sticky='WE')
cyan_button.grid(row=3, column=1, padx=1, pady=1, sticky='WE')
magenta_button.grid(row=3, column=2, padx=1, pady=1, sticky='WE')

store_button.grid(row=4, column=0, columnspan=3, padx=1, pady=1, sticky='WE')
save_button.grid(row=4, column=3, padx=1, pady=1, sticky='WE')
quit_button.grid(row=4, column=4, padx=1, pady=1, sticky='WE')

# create a color box and color labels
color_box = tkinter.Label(input_frame, bg='black', height=6, width=15)
color_tuple = tkinter.Label(input_frame, text='(0), (0), (0)')
color_hex = tkinter.Label(input_frame, text='#000000')
color_box.grid(row=1, column=3, columnspan=2, padx=35, pady=10, ipadx=10, ipady=10)
color_tuple.grid(row=2, column=3, columnspan=2)
color_hex.grid(row=3, column=3, columnspan=2)

# setting the output frame
stored_colors = {}
stored_color = IntVar()
for i in range(6):
    radio = tkinter.Radiobutton(output_frame, variable=stored_color, value=i)
    radio.grid(row=i, column=0, sticky='W')
    recall_button = tkinter.Button(output_frame, text='Recall Color', state=DISABLED)
    new_color_tuple = tkinter.Label(output_frame, text='(255), (255), (255)')
    new_color_hex = tkinter.Label(output_frame, text='#ffffff')
    new_color_black_box = tkinter.Label(output_frame, bg='black', width=3, height=1)
    new_color_box = tkinter.Label(output_frame, bg='white', width=3, height=1)

    recall_button.grid(row=i, column=1, padx=20)
    new_color_tuple.grid(row=i, column=2, padx=20)
    new_color_hex.grid(row=i, column=3, padx=20)
    new_color_black_box.grid(row=i, column=4, pady=2, ipadx=5, ipady=5)
    new_color_box.grid(row=i, column=4)

    # cget is a specific option for get
    stored_colors[stored_color.get()] = [new_color_tuple.cget('text'), new_color_hex.cget('text')]

# color values for the display
red_value = '00'
green_value = '00'
blue_value = '00'

root.mainloop()
