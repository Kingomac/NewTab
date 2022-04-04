use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, PartialEq, Clone)]
pub struct Link {
    pub name: String,
    pub link: String,
    pub image: String,
}

impl Link {
    pub fn new(name: String, link: String, image: String) -> Link {
        Link { name, link, image }
    }
}
