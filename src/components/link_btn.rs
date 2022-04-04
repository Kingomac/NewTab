use crate::models::link::Link;
use wasm_bindgen::prelude::*;
use yew::{html, Callback, Component, Context, Html, Properties};

#[wasm_bindgen]
extern "C" {
    fn confirm(s: &str) -> bool;
}

#[derive(PartialEq, Properties)]
pub struct Props {
    pub name: String,
    pub href: String,
    #[prop_or_default]
    pub image: String,
    pub delete: Callback<Link>,
}

pub struct LinkBtn;

pub enum Msg {
    Delete,
}

impl Component for LinkBtn {
    type Message = Msg;
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        LinkBtn
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::Delete => {
                if confirm("¿Eliminar enlace?") {
                    ctx.props().delete.emit(Link::new(
                        ctx.props().name.clone(),
                        ctx.props().href.clone(),
                        ctx.props().image.clone(),
                    ));
                }
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <a oncontextmenu={ctx.link().callback(|_| Msg::Delete)} href={ctx.props().href.clone()} target="_blank" class="link_btn"><img src={ctx.props().image.clone()}/><span>{&ctx.props().name }</span></a>
        }
    }
}
