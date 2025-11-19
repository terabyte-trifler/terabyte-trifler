fn main() {

    let s = String::from("Hello , Rust!");
    let len = calculate_length(&s);

    println!("The String '{}' has length {}", s, len);


}


fn calculate_length(s: &String) -> usize {

    s.len()

}
