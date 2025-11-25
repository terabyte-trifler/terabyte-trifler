fn main(){
    
    let mut s = String::from("Hello");

    println!("Before: {}", s);

    append_text(&mut s);

    println!("After: {}", s);
}

fn append_text(s: &mut String) {
    s.push_str(", World!");
}