fn main() {
    
    let str = String::from("Harkirat");
    let len = get_length(&str);
    println!("{} {}", str, len);

}

fn get_length(str: &String) -> usize {
    let len = str.len();
    return len
}

