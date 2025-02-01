import tkinter
from tkinter import IntVar, END

root = tkinter.Tk()
root.title('Morse Code Translator')
# root.iconbitmap('morse.ico')
root.geometry('500x350')
root.resizable(0, 0)

button_font = ('SimSim', 10)
root_color = '#778899'
frame_color = '#dcdcdc'
button_color = '#c0c0c0'
text_color = '#f8f8ff'

root.config(bg=root_color)

# define functions
def convert():
    # english to morse
    if language.get() == 1:
        get_morse()
    elif language.get() == 2:
        get_english()


def get_morse():
    # convert an english message to morse code
    print('morse')
    morse_code = ''
    
    # get the input text
    text = input_text.get('1.0', END)
    text = text.lower()
    

def get_english():
    print('english')

# dictionaries to covert morse code <--> english
english_to_morse = {'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
            'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 
            'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
            'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 
            'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 
            'u': '..--', 'v': '...-', 'w': '.--', 'x': '-..-', 
            'y': '-.--', 'z': '--..', '1': '.----',
            '2': '..---', '3': '...--', '4': '....-', '5': '.....',
            '6': '-....', '7':  '--...', '8': '---..', '9': '----.', 
            '0': '-----', ' ':' ', '|':'|', "":"" }

# morse_to_english = dict([(value, key) for key, value in english_to_morse.items()])
morse_to_english = {value: key for key, value in english_to_morse.items()}




# define layout
input_frame = tkinter.LabelFrame(root, bg=frame_color)
output_frame = tkinter.LabelFrame(root, bg=frame_color)
input_frame.pack(padx=16, pady=(16, 8))
output_frame.pack(padx=16, pady=(8, 16))

# layout for input frame
input_text = tkinter.Text(input_frame, height=8, width=30, bg=text_color)
input_text.grid(row=0, column=1, rowspan=3, padx=5, pady=5)

language = IntVar()
language.set(1)
morse_button = tkinter.Radiobutton(input_frame, text='English --> Morse Code',
                                   variable=language, value=1, font=button_font, bg=frame_color)
english_button = tkinter.Radiobutton(input_frame, text='Morse --> English Code',
                                   variable=language, value=2, font=button_font, bg=frame_color)
guide_button = tkinter.Button(input_frame, text='Guide', font=button_font, bg=button_color)

morse_button.grid(row=0, column=0, pady=(15, 0))
english_button.grid(row=1, column=0)
guide_button.grid(row=2, column=0, sticky='WE', padx=10)

# output frame layout
output_text = tkinter.Text(output_frame, height=8, width=30, bg=text_color)
output_text.grid(row=0, column=1, rowspan=4, padx=5, pady=5)

convert_button = tkinter.Button(output_frame, text='Convert', font=button_font, bg=button_color, command=convert)
play_button = tkinter.Button(output_frame, text='Play Morse', font=button_font, bg=button_color)
clear_button = tkinter.Button(output_frame, text='Clear', font=button_font, bg=button_color)
quit_button = tkinter.Button(output_frame, text='Quit', font=button_font, bg=button_color, command=root.destroy)

# ipadx defines the column width, and all other values are placed as sticky
convert_button.grid(row=0, column=0, padx=10, ipadx=50)
play_button.grid(row=1, column=0, padx=10, sticky='WE')
clear_button.grid(row=2, column=0, padx=10, sticky='WE')
quit_button.grid(row=3, column=0, padx=10, sticky='WE')































root.mainloop()
