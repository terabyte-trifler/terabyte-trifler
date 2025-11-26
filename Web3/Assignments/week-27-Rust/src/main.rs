struct Rect{
    width: u32,
    height: u32,
}

impl Rect {
  fn print_str(){
    println!("Inside the rect structure");
  }
}

fn main() {
    Rect::print_str();
}