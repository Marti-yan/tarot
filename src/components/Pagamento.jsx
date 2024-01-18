import React from "react";
import "./Pagamento.css";

const Pagamento = () => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <h4>10 Minutos</h4>
          </td>
          <td>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input name="cmd" type="hidden" value="_s-xclick" />
              <br />
              <input
                name="hosted_button_id"
                type="hidden"
                value="LPKM9JDVSJR6A"
              />
              <br />
              <input
                alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"
                name="submit"
                src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_buynowCC_LG.gif"
                type="image"
              />{" "}
            </form>
          </td>
        </tr>
        <tr>
          <td>
            <h4>15 Minutos</h4>
          </td>
          <td>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input name="cmd" type="hidden" value="_s-xclick" />
              <br />
              <input
                name="hosted_button_id"
                type="hidden"
                value="GNZ9XLQLRY364"
              />
              <br />
              <input
                alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"
                name="submit"
                src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_buynowCC_LG.gif"
                type="image"
              />
              <br />
            </form>
          </td>
        </tr>
        <tr>
          <td>
            <h4>20 Minutos</h4>
          </td>
          <td>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input name="cmd" type="hidden" value="_s-xclick" />
              <br />
              <input
                name="hosted_button_id"
                type="hidden"
                value="65T8HEHXSUDCS"
              />
              <br />
              <input
                alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"
                name="submit"
                src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_buynowCC_LG.gif"
                type="image"
              />
              <br />
            </form>
          </td>
        </tr>
        <tr>
          <td>
            <h4>30 Minutos</h4>
          </td>
          <td>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input name="cmd" type="hidden" value="_s-xclick" />
              <br />
              <input
                name="hosted_button_id"
                type="hidden"
                value="C9WRGSEVXBYP8"
              />

              <br />
              <input
                alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"
                name="submit"
                src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_buynowCC_LG.gif"
                type="image"
              />
              <br />
            </form>
          </td>
        </tr>
        <tr>
          <td>
            <h4>1 Hora</h4>
          </td>
          <td>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input name="cmd" type="hidden" value="_s-xclick" />
              <br />
              <input
                name="hosted_button_id"
                type="hidden"
                value="BHH6XCLLW4UL8"
              />
              <br />
              <input
                alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"
                name="submit"
                src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_buynowCC_LG.gif"
                type="image"
              />
              <br />
            </form>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Pagamento;
