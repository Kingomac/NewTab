use yew::{function_component, html, Callback, Properties};

#[derive(Properties, PartialEq)]
pub struct AddLinkBtnProps {
    pub set_visible: Callback<bool>,
}

#[function_component(AddLinkBtn)]
pub fn add_link_btn(props: &AddLinkBtnProps) -> Html {
    let onclick = {
        let set_visible = props.set_visible.clone();
        Callback::from(move |_| set_visible.emit(true))
    };
    html! {
        <>
        <button {onclick} style="font-size:22px" class="link_btn">{ "+" }</button>
        </>
    }
}
