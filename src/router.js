import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory

//Views
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'

//Dashboard
import Dashboard from '@/components/dashboard/Dashboard.vue'

//Serviços
import Indicadores from '@/components/servicos/Indicadores.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import Servico from '@/components/servicos/Servico.vue'
import Servicos from '@/components/servicos/Servicos.vue'

//Vendas
import Contratos from '@/components/vendas/Contratos.vue'
import Lead from '@/components/vendas/Lead.vue'
import Leads from '@/components/vendas/Leads.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'


const routes = [
    {
        path: '/', //localhost:8080/
        component: Site
    },
    {
        path: '/home', //localhost:8080/home
        component: Home,
        children: [
            {path: 'vendas', component: Vendas, children: 
                [
                    {path: 'leads', component: Leads, name: 'leads'}, //localhost:8080/home/vendas/leads
                    {path: 'leads/:id', component: Lead, name: 'lead'}, //localhost:8080/home/vendas/leads/1
                    {path: 'contratos', component: Contratos}, //localhost:8080/home/vendas/leads
                    {path: '', component: VendasPadrao} //localhost:8080/home/vendas - padrão
                ]
            },
            {path: 'servicos', component: Servicos, name: 'servicos', children: 
                [
                    {path:':id', name: 'servico', component: 
                        {
                            default: Servico,
                            opcoes: Opcoes,
                            indicadores: Indicadores

                        } // mult RouterViews
                    } //localhost:8080/home/servicos/:id
                ]
            }, //localhost:8080/home/servicos
            {path: 'dashboard', component: Dashboard} //localhost:8080/home/dashboard
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    }
] 

const router = createRouter({
    history: createWebHistory(),
    routes //routes: routes
})

export default router