const Course = ({ notes }) => {
    
//     let all = notes.parts.reduce((sum, note) => {
//         console.log('Note', note.exercises);
//         console.log('Sum', sum);
//         sum + note.exercises;
//     });
//    console.log('All', all);

    // for (const i in notes.parts) {
    //     console.log(notes.parts[i].exercises);
    // }

    // let total = notes.parts.reduce((sum, note) => sum + note.exercises, 0);
    
    return (
        <>  
            {notes.map(note =>
            <>
                <h1 key={note.id}>{note.name}</h1>
                {note.parts.map(notte =>
                    <>
                        <p key={notte.id}>{notte.name}: {notte.exercises}</p>
                    </>
                )}
                <p key={note.id}>Total: {note.parts.reduce((sum, notte) => sum + notte.exercises, 0)}</p>
            </>

            )}
            {/* <h1>{notes.name}</h1>
            {notes.parts.map(note =>
              <p key={note.id}>{note.name} {note.exercises}</p>
            )}
            <p>Total: {total}</p> */}
        </>
    )
    
}

export default Course;