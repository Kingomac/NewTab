use yew::{html, Callback, Component, Context, Html, Properties};

pub enum Msg {
    Add,
    Close,
}

#[derive(Clone, PartialEq, Properties)]
pub struct Props {
    pub visible: bool,
    pub close_callback: Callback<bool>,
    pub add_link: Callback<bool>,
}

pub struct AddLinkModal {}

impl Component for AddLinkModal {
    type Message = Msg;
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        AddLinkModal {}
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Msg) -> bool {
        match msg {
            Msg::Close => {
                ctx.props().close_callback.emit(true);
                true
            }
            Msg::Add => {
                log::info!("Adding link");
                ctx.props().add_link.emit(true);
                ctx.props().close_callback.emit(true);
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
        <dialog class="add_link_modal" open={ctx.props().visible.clone()}>
            <div class="row">
                <div>{"Añadir enlace"}</div>
                <button onclick={ctx.link().callback(|_| Msg::Close)}>{"x"}</button>
            </div>
            <form method="dialog">
            <input type="text" placeholder="Nombre" id="inp_link_name" />
            <input type="text" placeholder="Imagen" id="inp_link_image" />
            <input type="text" placeholder="Link" id="inp_link_link" />
            <button onclick={ctx.link().callback(|_| Msg::Add)}>{"Añadir"}</button>
            </form>
        </dialog>
        }
    }
}
