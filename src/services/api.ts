import { createServer } from "miragejs"
import { category, products } from './mock'

declare var server: IServer

declare var window: IWindow

if (window.server) {
    server.shutdown()
}

window.server = createServer({
    routes() {
        this.get("/api/category/:cat-id", (schema, request): { category: ICategory } => {
            return {
                category
            }
        }, { timing: 1000 })

        this.get("/api/product/:sub-categoryid", (schema, request): { products: IProduct[] } => {
            return {
                products
            }
        }, { timing: 1000 })
    },
})

