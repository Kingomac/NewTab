use crate::components::{
    add_link_btn::AddLinkBtn, add_link_modal::AddLinkModal, link_btn::LinkBtn,
};
use crate::models::link::Link;
use gloo_storage::*;
use wasm_bindgen::JsCast;
use web_sys::HtmlInputElement;
use yew::prelude::*;

use yew::{html, Callback, Component, Context, Html, Properties};

pub struct App {
    pub links: Vec<Link>,
    pub show_modal: bool,
}

pub enum Msg {
    AddLink,
    DeleteLink(Link),
    HideModal,
    ShowModal,
}

impl Component for App {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        let links: Vec<Link> = LocalStorage::get("links").unwrap_or_else(|_| vec![]);
        App {
            links,
            show_modal: false,
        }
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::AddLink => {
                log::info!("Running add_link callback!");
                let window = web_sys::window().expect("no global `window` exists");
                let document = window.document().expect("should have a document on window");

                let name_input = match document.get_element_by_id("inp_link_name") {
                    Some(x) => x.dyn_ref::<HtmlInputElement>().unwrap().value(),
                    None => "".to_owned(),
                };

                let link_input = match document.get_element_by_id("inp_link_link") {
                    Some(x) => x.dyn_ref::<HtmlInputElement>().unwrap().value(),
                    None => "".to_owned(),
                };

                let image_input = match document.get_element_by_id("inp_link_image") {
                    Some(x) => x.dyn_ref::<HtmlInputElement>().unwrap().value(),
                    None => "".to_owned(),
                };
                let new_link = Link::new(name_input, link_input, image_input);
                self.links.push(new_link);
                LocalStorage::set("links", self.links.clone()).expect(""); // clone porque sino deberías rayarte como el compilador xd
                true
            }
            Msg::DeleteLink(link) => {
                if let Some(pos) = self.links.iter().position(|x| *x == link) {
                    self.links.remove(pos);
                }
                LocalStorage::set("links", self.links.clone()).expect(""); // clone porque sino deberías rayarte como el compilador xd
                true
            }
            Msg::HideModal => {
                self.show_modal = false;
                true
            }
            Msg::ShowModal => {
                self.show_modal = true;
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <main>
                { for self.links.iter().map(|entry| {
                    html! {
                        <LinkBtn delete={ctx.link().callback(|link| Msg::DeleteLink(link))} href={entry.link.clone()} name={entry.name.clone()} image={entry.image.clone()} />
                    }
                })}
                <AddLinkBtn set_visible={ctx.link().callback(|_| Msg::ShowModal)}></AddLinkBtn>
                <AddLinkModal visible={self.show_modal} add_link={ctx.link().callback(|_| Msg::AddLink)} close_callback={ctx.link().callback(|_| Msg::HideModal)} />
            </main>
        }
    }
}
